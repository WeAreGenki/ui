<!--
  CODE EDITOR

  README:
    Simple code editor base on the CodeMirror library. Caution: this is a heavyweight
    component as its dependencies add around 61 KB to the overall bundle size.

  USAGE:
    <code-editor v-model="code" mode="text/javascript"/>

    <code-editor v-model="code"
      mode="application/json"
      :read-only="true"
      :match-brackets="false"
      :style-active-line="false"
    />
-->
<template>
  <textarea :readonly="readOnly"/>
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/selection/active-line';

// window.jsonlint = jsonlint;

export default {
  name: 'CodeEditor',
  props: {
    mode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    lineNumbers: {
      type: Boolean,
      default: true,
    },
    lineWrapping: {
      type: Boolean,
      default: true,
    },
    matchBrackets: {
      type: Boolean,
      default: true,
    },
    styleActiveLine: {
      type: Boolean,
      default: true,
    },
    // lint: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  data: () => ({
    skipNextChangeEvent: false,
  }),
  watch: {
    // value(newVal, oldVal) {
    value(newVal) {
      const editorValue = this.editor.getValue();

      if (newVal !== editorValue) {
        this.skipNextChangeEvent = true;
        const scrollInfo = this.editor.getScrollInfo();
        this.editor.setValue(newVal);
        this.editor.scrollTo(scrollInfo.left, scrollInfo.top);
      }
    },
  },
  mounted() {
    // FIXME: Don't render the editor if it's hidden, wait until it's visible (otherwise it breaks rendering)

    this.editor = CodeMirror.fromTextArea(this.$el, {
      mode: this.mode,
      readOnly: this.readOnly,
      lineNumbers: this.lineNumbers,
      lineWrapping: this.lineWrapping,
      matchBrackets: this.matchBrackets,
      styleActiveLine: this.styleActiveLine,
      theme: 'dracula',
      tabSize: 2,
      viewportMargin: Infinity,
      autoCloseBrackets: true,
      hint: true,
    });
    this.editor.setValue(this.value);
    this.editor.on('change', (cm) => {
      if (this.skipNextChangeEvent) {
        this.skipNextChangeEvent = false;
        return;
      }
      this.$emit('input', cm.getValue());
    });
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.toTextArea();
    }
  },
};
</script>

<style lang="postcss">
@import "codemirror/lib/codemirror";
@import "codemirror/theme/dracula";
@import "@wearegenki/ui/import";

.CodeMirror {
  min-width: 100%;
  height: auto;

  @if var(--use-drop-shadow) {
    filter: drop-shadow(var(--shadow-subtle));
  } @else { /* stylelint-disable-line */
    box-shadow: var(--shadow-subtle-legacy);
  }
}
</style>
