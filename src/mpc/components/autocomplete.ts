export class Autocomplete {
  public items = [
    'Charles',
    'Jedd',
    'Nikolaj',
    'Jeroen',
    'David',
    'Rob',
    'Matt',
    'Patrick',
    'Jason',
    'Martin',
    'Fredrick',
    'Alex'
  ]

  public bind() {
    const nodeRequire = ((<any>window).System)._nodeRequire;
    if (nodeRequire) {
      const fs = nodeRequire('fs');
      console.log(JSON.parse(fs.readFileSync('dist/mpc/components/bootstrap3.json', 'utf8')));
    } else {
      console.log('Detected browser environment');
    }
  }
}