
import React from 'react'
import { Row, Col, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap'

const InputWithButton = (props) => (
  <InputGroup className={props.className}>
    <FormControl placeholder={props.placeholder} type='text' />
    <span className='input-group-btn'>
      <Button bsStyle={props.button_style} >{ props.button_content }</Button>
    </span>
  </InputGroup>
)

const LabeledInput = (props) => (
  <FormGroup>
    <Row>
      <label className='col-sm-2 control-label text-right'>{ props.label }</label>
      <Col sm={10}>
        {props.children}
      </Col>
    </Row>
  </FormGroup>
)

export { LabeledInput, InputWithButton }
