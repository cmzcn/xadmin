import { Checkbox, Select, Text, Transfer, Textarea } from './components'
import DatePicker from './components/DatePicker'
import DatetimePicker from './components/DatetimePicker'
import ArrayWidget from './components/Array'
import Fieldset from './components/Fieldset'

import { FieldGroup, InlineGroup, ColGroup, SimpleGroup } from './components/base'
import { FormLayout, ModalLayout } from './components/layout'

export default {
  components: {
    'Form.Layout': FormLayout,
    'Form.ModalLayout': ModalLayout,
    'Form.FieldGroup': FieldGroup,
    'Form.InlineGroup': InlineGroup,
    'Form.SimpleGroup': SimpleGroup,
    'Form.ColGroup': ColGroup
  },
  form_fields: {
    text: {
      component: Text,
      parse: (value) => value === '' ? null : value
    },
    textarea: {
      component: Textarea,
      parse: (value) => value === '' ? null : value
    },
    number: {
      component: Text,
      parse: (value) => {
        return value === '' || value == null ? null : parseFloat(value)
      },
      attrs: {
        type: 'number',
        style: {
          maxWidth: 200
        }
      }
    },
    integer: {
      component: Text,
      parse: (value) => {
        return value === '' || value == null ? null : parseFloat(value)
      },
      attrs: {
        type: 'number',
        style: {
          maxWidth: 200
        }
      }
    },
    select: {
      component: Select,
      parse: (value) => value
    },
    numselect: {
      component: Select,
      parse: (value) => {
        return value === '' || value == null ? null : parseFloat(value)
      }
    },
    date: {
      component: DatePicker
    },
    datetime: {
      component: DatetimePicker
    },
    // time: {
    //   component: DateTime,
    //   normalize: (value, previousValue) => {
    //     return (value && value.format) ? value.format('HH:mm:ss') : value || previousValue
    //   },
    //   attrs: {
    //     dateFormat: false,
    //     timeFormat: true,
    //     viewMode: 'time',
    //     valueFormat: 'LT'
    //   }
    // },
    bool: {
      component: Checkbox,
      normalize: (value, previousValue) => {
        return Boolean(value)
      }
    },
    checkbox: {
      component: Checkbox
    },
    transfer: {
      component: Transfer
    },
    fieldset: {
      component: Fieldset
    },
    array: {
      component: ArrayWidget
    }
  }
}
