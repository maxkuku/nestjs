// здесь интерфейс, описывающий Новость

export interface Posts {
  id: string | number;
  name: string;
  description: string;
  text: string;
  author?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
