import React from "react";
import { FormComponentProps } from 'antd/lib/form';
import Editor from 'react-simple-code-editor';

interface IProps extends FormComponentProps {
  value: string;
  onChange: (code: string) => void
}

export default class CodeEditor extends React.PureComponent<IProps> {
  render() {
    return (
      <Editor
        className='ant-input'
        value={this.props.value}
        padding={[8, 8, 8, 32]}
        onValueChange={code => this.props.onChange(code || '')}
        highlight={code => this.insertLineNumbers(code)}
        style={{
          minHeight: `calc(100vh - 420px)`,
          height: `auto`,
          lineHeight: 1.2,
          fontSize: 12,
          fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace'
        }}
      />
    );
  }

  private insertLineNumbers(code: string = ''): string | null {
    return code.split('\n').map(line => {
      return `<span class="code-editor-line-number">${line}</span>`
    }).join('\n');
  }
}
