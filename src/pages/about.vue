<template>
  <q-page>
    <div class="row">
        <p>This is the pre test flight application for testing the test flight.</p>
    </div>
    <div class="row">
        <p>Famous test flight includeeeeeeeee</p>
    </div>
    <div class="row">
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/STS-1">STS-1</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Wright_Flyer">Wright Flyer</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Concorde">Concorde 001</a></li>
        </ul>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Amplify, { Analytics } from 'aws-amplify';
export default {
  name: 'PageIndex',
  mounted(){
      Analytics.record({ name: 'Mounted about' });
  }
}
</script>
