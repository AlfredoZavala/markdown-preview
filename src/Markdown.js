import { marked } from 'marked';
import { useState } from 'react';


const Markdown = () => {

    /*
        a header (H1 size), a sub header (H2 size), a link, 
        inline code, a code block, a list item, a blockquote, 
        an image, and bolded text
    */
  const [val, setVal] = useState(`
  # Header 
  ## Sub-Header
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\` 

  - First item
    - Second item
    - Third item

    > blockquote 

    ![alt text](image.jpg)

    **bold text**
  `);

  


  const handleChange = (event) => {
    console.log(event.target.value);
    setVal(event.target.value);
  }

  
  marked.use({
    breaks: true
  })


      return (
        <div className='container'>
            <textarea 
                id="editor"
                defaultValue={val}
                onChange={handleChange}
            ></textarea>
            <div id="preview" 
                dangerouslySetInnerHTML={{ __html: marked(val) }} ></div>
        </div>
      );
}
 
export default Markdown;
