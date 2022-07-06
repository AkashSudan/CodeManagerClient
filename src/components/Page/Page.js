import React from 'react';
import './prism.css';
function Page(props){
return <div style={{marginLeft:"20px"}}>
<pre>
    <code className="language-cpp">
    {props.page}
    </code>
</pre>
    
</div>
}
export default Page;