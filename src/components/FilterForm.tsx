import { Formik } from 'formik'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { memo } from 'react'
import { FormikConfig } from 'formik/dist/types'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export interface FilterFormValues {
  name: string
  groupId: string
}

interface FilterFormProps extends FormikConfig<Partial<FilterFormValues>> {
  groupContactsList: GroupContactsDto[]
}

export const FilterForm = memo<FilterFormProps>(
  ({ onSubmit, initialValues = {}, groupContactsList }) => {
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleSubmit}>
            <Row xxl={4} className="g-4">
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    style={{
                      boxShadow: '0 2px 5px black',
                      background: 'bisque',
                      color: 'green',
                      fontWeight: '600',
                      fontSize: '1.2rem',
                      textShadow: '1px 1px 1px black',
                    }}
                    id={'name'}
                    name={'name'}
                    autoComplete="name"
                    placeholder="name"
                    aria-label="name"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Select
                  style={{
                    boxShadow: '0 2px 5px black',
                    background: 'bisque',
                    color: 'green',
                    fontWeight: '600',
                    fontSize: '1.2rem',
                    textShadow: '1px 1px 1px black',
                  }}
                  id={'groupId'}
                  name={'groupId'}
                  aria-label="Поиск по группе"
                  onChange={handleChange}
                >
                  <option>Open this select menu</option>
                  {groupContactsList.map((groupContacts) => (
                    <option value={groupContacts.id} key={groupContacts.id}>
                      {groupContacts.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Button variant={'primary'} type={'submit'}>
                  Применить
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    )
  }
)
