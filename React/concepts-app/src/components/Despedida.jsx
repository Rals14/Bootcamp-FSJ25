
//PROPS -> propiedades que se le pasan a un componente
//Como recibir props? a través de sus parametros

export const Despedida = ({nombreUsuario}) => {


    return (
        <>
            <h2>Bye bye {nombreUsuario}, desde la despedida</h2>
        </>
    )
}