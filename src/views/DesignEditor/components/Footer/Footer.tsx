import Graphic from "./Graphic"
import Presentation from "./Presentation"
import Video from "./Video"
import useEditorType from "~/hooks/useEditorType"

const Footer = () => {
  const editorType = useEditorType()

  return {
    NONE: <></>,
    PRESENTATION: <Presentation />,
  }[editorType]
}

export default Footer
