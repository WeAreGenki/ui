<!--

  IMPORTANT: THIS FILE IS FOR DEV ONLY

  FIXME: Remove from production builds

-->

<template>
  <div id="docs-overview" class="container">
    <h1>Heading h1
      <small>Subheading</small>
    </h1>
    <h2>Heading h2
      <small>Subheading</small>
    </h2>
    <h3>Heading h3
      <small>Subheading</small>
    </h3>
    <h4>Heading h4
      <small>Subheading</small>
    </h4>
    <h5>Heading h5
      <small>Subheading</small>
    </h5>

    <p class="lead">para lead</p>

    <p>para1</p>
    <p>para2</p>
    <p>para3</p>

    block text

    <button class="btn">button</button>

    <form action="self">
      <div class="form-row">
        <input type="text"></input>
      </div>

      <div class="form-row">
        <label for="">
          <input type="checkbox"></input>
          checkbox
        </label>
      </div>

      <div class="form-row">
        <button type="submit" class="btn">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'docs-overview',
};
</script>

<style lang="postcss">
/* #docs-overview {} */
</style>
