import React, {useState} from 'react'

export default function BtnPayment(props: { name: string; image: string }) {
  const {name, image} = props
  const [abaConfirmation, setbaConfirmation] =useState(false)

  const showConfirmation = () => {
    setbaConfirmation(!abaConfirmation)
  }
  return (
    <section>
        <button className="btnPayment" type="button" onClick={ showConfirmation }>
          {name}
          <img className="imgPayment" src={ image } />
        </button>
        <br />
        {abaConfirmation && (
          <button className="confirmBtn" type="button">
            Confirmar Pagamento?
          </button>
        )}
    </section>
  )
}
