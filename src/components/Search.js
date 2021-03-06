import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('computer');
    const [debouncedTerm, setDebouncedTerm] = useState('computer');
    const [result, setResult] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {

        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResult(data.query.search);
        };

        if(debouncedTerm){
            search();
        }
        

    }, [debouncedTerm]);

    // useEffect(() => {

    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         });

    //         setResult(data.query.search);
    //     };

    //     if (term && !result.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 2000);

    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }



    // }, [term]);

    const renderedResults = result.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input
                        type="text"
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;