import React from 'react';

class ModalComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modStyle: ''
        };
    }

    // shouldComponentUpdate(prevProps) {
    //     console.log('Previous Props: ', prevProps.visibility);

    //     if (prevProps.visibility === true) {
    //         this.openModal();
    //         return true;
    //     } else {
    //         this.closeModal();
    //         return false;
    //     }
    // }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div className={"modal " + (this.props.modalStatus ? 'is-block' : 'is-hidden')}>
                <div className="modal-background" onClick={e => this.close(e)} />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{this.props.title}</p>
                        <button className="delete" aria-label="close" onClick={e => this.close(e)} />
                    </header>
                    <section className="modal-card-body">
                        {this.props.message}
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button" onClick={e => this.close(e)}>Cancel</button>
                    </footer>
                </div>
            </div >
        )
    }
}

export default ModalComponent;