import api from 'api';
import { AxiosResponse } from 'axios';
import { ApiEnpoint } from 'const/api';
import { ParseTextResponse, PublicWord } from 'types/api';

export default class PublicService {
  static findWord(word: string): Promise<AxiosResponse<PublicWord>> {
    return api.post(`${ApiEnpoint.public}/${ApiEnpoint.words}`, { word });
  }

  static parseText(text: string): Promise<AxiosResponse<ParseTextResponse>> {
    return api.post(`${ApiEnpoint.public}/${ApiEnpoint.text}`, { text });
  }
}
