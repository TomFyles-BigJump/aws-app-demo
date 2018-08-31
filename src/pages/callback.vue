<script>
export default {
  mounted() {
    var tokens = parseHash(this.$route.hash);
    console.log(tokens);
    this.$store.dispatch("auth/setTokens", tokens);
  }
};

//takes a full hash string - eg. #id_token=123&nonce=foo and converts into object
function parseHash(str) {
  str = str.substring(1);
  var pieces = str.split("&"),
    data = {},
    i,
    parts;
  // process each query pair
  for (i = 0; i < pieces.length; i++) {
    parts = pieces[i].split("=");
    if (parts.length < 2) {
      parts.push("");
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }
  return data;
}
</script>
<template>

</template>
