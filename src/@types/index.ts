export enum Gender {
  Female = 'female',
  Male = 'Male'
}

export enum Extension {
  xlsx = 'xlsx',
  xls = 'xls',
  pdf = 'pdf',
  jpg = 'jpg',
  doc = 'doc',
  docx = 'docx'
}

export enum DocumentType {
  Contract = 'contract',
  Questionnaire = 'questionnaire',
  Certificate = 'certificate'
}

export enum Status {
  Active = 'active',
  Inactive = 'inactive'
}

export type User = {
  name: string
  image: string
  gender: Gender
  status: Status
  birthday: string
  address: {
    city: string
    street: string
  }
  phone: {
    personal: string
    parent: string
  }
  social: {
    whatsapp: string
    telegram: string
    viber: string
  }
}

export type Profile = Partial<User>

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type UserDocument = Post & {
  extension: Extension
  type: DocumentType
  status: Status
  dateStart: string
  dateEnd: string
}
