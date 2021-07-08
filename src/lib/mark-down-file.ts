import FileInterface = MarkDownBundler.FileInterface;
import MarkDownFileInterface = MarkDownBundler.MarkDownFileInterface;

import {File} from "./file"


export class MarkDownFile extends File implements MarkDownFileInterface {
  parent?: MarkDownFile = undefined;

  constructor(path: string, parent?: MarkDownFile) {
    super(path);

    if (this.extension !== '.md') {
      throw 'read file is not markdown file'
    }

    this.parent = parent;
  }
}