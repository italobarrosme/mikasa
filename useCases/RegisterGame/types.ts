type Image = {
  url: File | null;
}

export type RegisterGameType = {
  orderFinished: number,
  title: string,
  description: string,
  finishedDate: string,
  image: Image,
  rating: number,
}
