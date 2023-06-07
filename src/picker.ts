const notes: string[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

// Space complexity is O(1), time complexity is O(n^2)
// function randomTetrad(notes: string[]): string[] {
//   const tetrad: string[] = [];
//   let randomIndex = Math.floor(Math.random() * notes.length);
//   let randomNote = notes[randomIndex]

//   while (tetrad.length < 4) {
//     if (!tetrad.includes(randomNote)) {
//       tetrad.push(randomNote);
//     }
//     randomIndex = Math.floor(Math.random() * notes.length);
//     randomNote = notes[randomIndex];
//   }

//   return tetrad;
// }

// Space complexity is O(1), time complexity is O(1)
function randomTetrad(notes: string[]): string[] {
  const tetrad: string[] = [];
  const notesCopy = notes.slice();

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * notesCopy.length);
    tetrad.push(notesCopy[randomIndex]);
    notesCopy.splice(randomIndex, 1);
  }

  return tetrad;
}

const fourByFour: string[][] = [];
let counter: number = 4;
while (counter > 0) {
  fourByFour.push(randomTetrad(notes));
  counter -= 1;
}


console.log(fourByFour)

console.log(randomTetrad(notes));
export default notes