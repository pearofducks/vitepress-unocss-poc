<script setup>
import Box from './Box.vue'
import Container from './Container.vue'
</script>

# Spacing

## Basic use
<container class="mt-8">
<div class="flex flex-wrap items-start justify-center text-white text-sm font-bold leading-6 -mx-5">
  <div class="flex items-start">
    <div class="flex-none px-5">
      <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
        <box striped class="h-6 rounded-t-lg" fg-color="var(--tw-white-fg)"></box>
        <div class="p-4">pt-6</div>
      </div>
    </div>
    <div class="flex-none px-5 pt-6">
      <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
        <div class="flex-none p-4">pr-4</div>
        <box striped class="flex-none w-4" fg-color="var(--tw-white-fg)" ></box>
      </div>
    </div>
  </div>
  <div class="flex items-start">
    <div class="flex-none px-5 pt-6">
      <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
        <div class="p-4">pb-8</div>
        <box striped class="h-8" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
    <div class="flex-none flex px-5 pt-6">
      <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
        <box striped class="flex-none w-2" fg-color="var(--tw-white-fg)"></box>
        <div class="flex-none p-4">pl-2</div>
      </div>
    </div>
  </div>
</div>
</container>

## Horizontal padding

  <container>
    <dev class="relative rounded-xl overflow-auto p-8">
      <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
        <div class="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
          <box striped class="w-8" fg-color="var(--tw-white-fg)"></box>
          <div class="p-4">px-8</div>
          <box striped class="w-8" fg-color="var(--tw-white-fg)"></box>
        </div>
      </div>
    </dev>
  </container>
