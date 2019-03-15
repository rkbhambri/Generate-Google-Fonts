import React from 'react';
import copyIcon from '../../../../images/copy.svg';

const HowToUseData = (props) => {
    const head = '<head>';
    const googleLink = 'https://fonts.google.com/specimen/' + props.fontFamily.replace(/ /g, "+");
    const font = 'font-family: ' + props.fontFamily + ' , sans-serif;';

    let link = null;
    if (props.loadStandardTabActive) {
        link = '<link href="https://fonts.googleapis.com/css?family=' + props.fontFamily.replace(/ /g, "+") + '" rel="stylesheet">';
    } else {
        link = "<style> @import url('https://fonts.googleapis.com/css?family=" + props.fontFamily.replace(/ /g, "+") + "'); </style>"
    }

    return (
        <div className="how-to-use-data mt-2">
            <div className="embed-font">
                <h3>Embed Font</h3>
                <p>To embed your selected fonts into a webpage, copy this code into the {head} of your HTML document.</p>
                <div className="link p-2 border">
                    <p className="pt-2">
                        {link}
                        <span className="copyIcon float-right">
                            <img src={copyIcon} alt="Not found" onClick={() => navigator.clipboard.writeText(link)} />
                        </span>
                    </p>
                </div>
            </div>
            <div className="specify-css mt-2">
                <h3>Specify in CSS</h3>
                <p>Use the following CSS rules to specify these families:</p>
                <div className="font p-2 border">
                    <p className="pt-2">
                        {font}
                        <span className="copyIcon float-right">
                            <img src={copyIcon} alt="Not found" onClick={() => navigator.clipboard.writeText(font)} />
                        </span>
                    </p>
                </div>
            </div>
            <div className="google-link mt-2">
                Goolgle Fonts:&nbsp;
                <a href={googleLink} target="_blank" rel="noopener noreferrer">{googleLink}</a>
            </div>
        </div>
    );
};

export default HowToUseData;