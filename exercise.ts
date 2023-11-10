const writers2 = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "Stephen King" },
  { id: 3, name: "Móra Ferenc" }
]

const books2 = [
  { writerId: 1, title: "...", type: "fantasy", numberOfWords: 100000 },
  { writerId: 1, title: "...", type: "thriller", numberOfWords: 200000 },
  { writerId: 1, title: "...", type: "scifi", numberOfWords: 150000 },
  { writerId: 2, title: "...", type: "scifi", numberOfWords: 400000 },
  { writerId: 2, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
]

const result2 = getAmountPublishedInFantasy(writers2, books2, "J. K. Rowling")
console.log(result2 === 100000)

const writers3 = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "Stephen King" },
  { id: 3, name: "Móra Ferenc" }
]

const books3 = [
  { writerId: 1, title: "...", type: "fantasy", numberOfWords: 100000 },
  { writerId: 1, title: "...", type: "thriller", numberOfWords: 200000 },
  { writerId: 1, title: "...", type: "scifi", numberOfWords: 150000 },
  { writerId: 2, title: "...", type: "scifi", numberOfWords: 400000 },
  { writerId: 2, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
]

const result3 = getAmountPublishedInFantasy(writers3, books3, "Stephen King")
console.log(result3 === 300000)

const writers4 = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "Stephen King" },
  { id: 3, name: "Móra Ferenc" }
]

const books4 = [
  { writerId: 1, title: "...", type: "fantasy", numberOfWords: 100000 },
  { writerId: 1, title: "...", type: "thriller", numberOfWords: 200000 },
  { writerId: 1, title: "...", type: "scifi", numberOfWords: 150000 },
  { writerId: 2, title: "...", type: "scifi", numberOfWords: 400000 },
  { writerId: 2, title: "...", type: "thriller", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
]

const result4 = getAmountPublishedInFantasy(writers4, books4, "Stephen King")
console.log(result4 === 0)


type Writers1 = {
  id: number,
  name: string,
}

const writers1: Writers1[] = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "Stephen King" },
  { id: 3, name: "Móra Ferenc" }
]

type Books1 = {
  writerId: number,
  title: string,
  type: string,
  numberOfWords: number,
}


const books1: Books1[] = [
  { writerId: 1, title: "...", type: "fantasy", numberOfWords: 100000 },
  { writerId: 1, title: "...", type: "thriller", numberOfWords: 200000 },
  { writerId: 1, title: "...", type: "fantasy", numberOfWords: 150000 },
  { writerId: 2, title: "...", type: "scifi", numberOfWords: 400000 },
  { writerId: 2, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
  { writerId: 3, title: "...", type: "fantasy", numberOfWords: 300000 },
]

/* ---CODE---- */


function getAmountPublishedInFantasy(writers: Writers1[], books: Books1[], writerName: string) {
const writer = writers.find((writer: Writers1) => writer.name === writerName);

  if (writer === undefined) {
    return 0;
  }

  let writerBooks = books.filter(book => book.writerId === writer.id);

  let wordCount = writerBooks.reduce((sum, book) => {
    return book.type === "fantasy" ? sum + book.numberOfWords : sum;
  }, 0);

  return wordCount;
}

const result1 = getAmountPublishedInFantasy(writers1, books1, "J. K. Rowling")
console.log(result1 === 25000)

export { }

