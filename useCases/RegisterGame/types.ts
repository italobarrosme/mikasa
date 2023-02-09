type Image = {
  url: File | null;
}

export type RegisterGameType = {
  orderFinished: number | string,
  title: string,
  description: string,
  finishedDate: string,
  image: Image,
  rating: number,
}
