import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'German',
        value: 'de'
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Input Text</label>
                    <input type="text" onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown
                title="Select Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="Converted Text"></h3>
            <Convert
                language={language}
                text={text}
            />
        </div>
    );
};

export default Translate;

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM