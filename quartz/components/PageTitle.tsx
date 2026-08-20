// quartz/components/PageTitle.tsx
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ displayClass, fileData, cfg }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Untitled"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img
          src="https://64.media.tumblr.com/ee69f609e9eb779f8c32e68b3daa007f/43186416445fee51-b5/s640x960/a497455776f84205174029246f15c626fb000aea.gif"
          alt={title}
          style={{ maxHeight: "60px", width: "auto" }}
        />
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title img {
  display: block;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
