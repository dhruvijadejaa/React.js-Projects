/* This component turns a single name into a clickable card (link). */
/* It is the starting part of a URL used by Namecheap to search domains.
* Everything before domain= is fixed
* The value after domain= is the search term */
const nameCheapUrl = 
"https://www.namecheap.com/domains/registration/results/?domain=";

/* 
suggestedName = "techify"
↓
URL = "...domain=techify"
↓
User clicks
↓
Opens domain search for "techify"

href={nameCheapUrl + suggestedName}
Static URL + Dynamic value = Dynamic link
*/

const NameCard = ({suggestedN}) => {
    return(
        <a 
        target="_blank"
        rel="noreferrer"
        href={`${nameCheapUrl}${suggestedN}`}>
            <div>
                <p>
                    {suggestedN}
                </p>
            </div>

        </a>
    );
};

