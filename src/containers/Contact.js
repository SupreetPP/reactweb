import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="text" placeholder="Text input" defaultValue="bulma" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>
                        </div>
                        <p className="help is-success">This username is available</p>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="email" placeholder="Email input" defaultValue="hello@" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle" />
                            </span>
                        </div>
                        <p className="help is-danger">This email is invalid</p>
                    </div>
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox" />
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question" />
                                Yes
            </label>
                            <label className="radio">
                                <input type="radio" name="question" />
                                No
            </label>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text">Cancel</button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3598897549164!2d85.32448121457429!3d27.706172432151437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19aa1d04ad11%3A0x7a7d7f5c05e3b3ff!2sHalftone+Designs!5e0!3m2!1sen!2snp!4v1562665369042!5m2!1sen!2snp" frameBorder={0} allowFullScreen />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;