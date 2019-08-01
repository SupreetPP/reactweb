import React from 'react';
import ModalComponent from '../components/Modal/Modal';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalState: false,
            modalTitle: "",
            modalMessage: ""
        };
    }

    modalTitleInput(e) {
        // console.log(this.state.modalTitle);
        this.setState({
            modalTitle: e.target.value
        })
    }

    modalMessageInput(e) {
        // console.log(this.state.modalMessage);

        this.setState({
            modalMessage: e.target.value
        })
    }

    openModal() {
        this.setState({ modalState: true });
        console.log(this.props.location.pathname);
    }

    closeModal() {
        this.setState({ modalState: false })
    }

    triggerModal() {
        // console.log('Toggle Button')
        this.setState({
            modalState: !this.state.modalState
        }, (
                console.log('Modal State: ', this.state.modalState)
            ))
    }

    render() {
        return (
            <div className="section-modal">
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="field">
                            <label className="label">Modal Title</label>
                            <div className="control">
                                <input className="input is-primary" type="text" placeholder="Primary input" onChange={e => this.modalTitleInput(e)} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Modal Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea" onChange={e => this.modalMessageInput(e)}></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-link" onClick={e => this.openModal(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalComponent
                    title={this.state.modalTitle}
                    message={this.state.modalMessage}
                    modalStatus={this.state.modalState}
                    onClose={() => this.closeModal()}
                />
            </div>
        )
    }
}

export default Modal;