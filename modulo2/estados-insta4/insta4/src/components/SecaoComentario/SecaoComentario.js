import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const ContainerComentarios = styled.div`
/* 	display:flex;
	flex-direction: column;
	justify-content: center; */
    padding: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentarios: [
		{
			comentario: ""
	
		}
		]
	}
	
	adicionaComentario = () => {

		const novoComentario = {
		  comentario: this.state.comentario
		}
	
		const novosComentarios = [...this.state.comentarios, novoComentario] 
	
		this.setState({comentarios: novosComentarios})
		this.setState({comentario: ""})
		
	  }

	


	onChangeComentario = (event) => {
		this.setState({
			comentario: event.target.value
		})
		console.log("comentário", this.state.comentario)
	}

	render() {

		const listaDeComentarios = this.state.comentarios.map((coment) => {
			return ( <p>{coment.comentario}</p>   
					)
		  })


		return <div>
			<CommentContainer>
			<InputComentario 
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}		
				
			/>

			<button onClick={this.props.aoEnviar} onClick={this.adicionaComentario}>Enviar</button>
	
			</CommentContainer>
			<ContainerComentarios>
				{listaDeComentarios}
				</ContainerComentarios>
		</div>
	}
}
