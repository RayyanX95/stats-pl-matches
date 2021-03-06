import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResult';
type MatchData = [Date, string, string, number, number, MatchResults, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) { };

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults, // type assertion
      row[6]
    ])
  }

}