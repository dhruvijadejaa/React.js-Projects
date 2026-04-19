import React from 'react';
import NameCard from '../NameCard/NameCard';
/* how generated names are shown on screen */
const ResultContainer  = ({suggestedN}) =>{
    const resultContainerJsx = suggestedN.map((singleName) => {
        return (
            <NameCard
            key = {suggestedN}
            suggestedN = {suggestedN}
            />
        );
    });

    return(
        <div>
            {resultContainerJsx}
        </div>
    );
};
/* suggestedNames.map((suggestedName) => {
    return <NameCard ... />
});

So each string becomes a component:

"techify" → <NameCard suggestedName="techify" />
"gettech" → <NameCard suggestedName="gettech" /> 

This component is just a converter:

Array of strings → List of UI components 
NameCard component/function will handle UI and turns single name into clickable*/

