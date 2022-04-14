export default {
  data() {
    return {
      data: null,
      loading: true,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.data = null;
      fetch(`http://localhost:3000${url}`).then((response) =>
        response.json().then((response) => {
          setTimeout(() => {
            this.data = response;
            this.loading = false;
          }, 1000);
        })
      );
    },
  },
};
