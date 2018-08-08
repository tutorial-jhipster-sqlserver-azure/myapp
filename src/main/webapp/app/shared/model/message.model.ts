export interface IMessage {
  id?: number;
  type?: string;
  content?: string;
}

export const defaultValue: Readonly<IMessage> = {};
