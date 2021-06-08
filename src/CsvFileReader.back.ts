import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResult';

// Tuples
type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) { }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string) => row.split(','))
      .map((row: string[]): MatchData => [
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