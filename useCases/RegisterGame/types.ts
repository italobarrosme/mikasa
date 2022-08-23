type Image = {
  url: string;
}

export type RegisterGameType = {
  orderFinished: number,
  title: string,
  description: string,
  finishedDate: string,
  image: Image,
  rating: number,
}
