import {DiscussionEmbed} from "disqus-react"
import { NumeredQuestion } from "../providers/QuestionProvider"




const DisqusComments : React.FC<{ }> = ({ }) => {
  const disqusShortname = "simulador-test-de-conducir-argentina-caba-autos"
  const disqusConfig = {
    url: "https://bandinopla.github.io/simulador-test-de-conducir", 
    identifier: "general", // Single post id
    title: "Opinionen y comentarios generales acerca del app", // Single post title
    language:"es_MX"
  }
  return (
    <div className="mt-10 pt-10 border-t-2 border-black">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;