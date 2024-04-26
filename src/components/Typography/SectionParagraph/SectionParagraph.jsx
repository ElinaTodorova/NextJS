import "./SectionParagraph.sass";
import parse from 'html-react-parser';

export default function SectionParagraph({ data }) {
    let formattedData = [];
    let startIndex = data.indexOf("<&");
    
    while (startIndex !== -1) {
        const beforeBold = data.substring(0, startIndex);
        if (beforeBold !== "") { 
            formattedData.push(beforeBold);
        }
        
        const endIndex = data.indexOf("&>", startIndex);
        
        if (endIndex === -1) {
            break;
        }
        
        const boldWords = data.substring(startIndex + 2, endIndex);
        
        formattedData.push(<b key={startIndex}>{boldWords}</b>);
        
        startIndex = endIndex + 2;
        
        data = data.substring(startIndex);
        
        startIndex = data.indexOf("<&");
    }
    
    if (data !== "") { 
        formattedData.push(data);
    }
    
    return <p className="paragraph">{formattedData}</p>;
}

