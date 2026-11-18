import "i18next"

import type { MessageSchema } from "."

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation"
    resources: {
      translation: MessageSchema
    }
  }
}
