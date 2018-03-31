<template>
    <b-container>
        <b-jumbotron bg-variant="light" header-tag="h3" header-level="" class="text-left">
            <template slot="header">UK Biobank Genome-Wide Association Studies (GWAS)<a class="github-icon float-right" href="https://github.com/Nealelab/UK_Biobank_GWAS" target="_blank"><font-awesome-icon :icon="githubIcon"></font-awesome-icon></a></template>
            <template slot="lead">Rapid GWAS of thousands of phenotypes in the UK Biobank.</template>
        </b-jumbotron>
        <b-jumbotron bg-variant="light" header-tag="h3" header-level="" class="text-left">
            <template slot="header">GWAS Results Browser<a class="github-icon float-right" href="https://github.com/liameabbott/ukbb-browser" target="_blank"><font-awesome-icon :icon="githubIcon"></font-awesome-icon></a></template>
            <template slot="lead">A frontend resource using <a href="https://vuejs.org" target="_blank">Vue.js</a>, <a href="https://getbootstrap.com" target="_blank">Bootstrap</a>, and <a href="https://www.highcharts.com" target="_blank">Highcharts</a> to visualize results of UK Biobank GWAS.</template>
        </b-jumbotron>
        <b-jumbotron bg-variant="light" header-tag="h3" header-level="" class="text-left">
            <template slot="header">Whole Exome Sequencing in Epilepsy - Epi25K Consortium<a class="github-icon float-right" href="https://github.com/liameabbott/epi25" target="_blank"><font-awesome-icon :icon="githubIcon"></font-awesome-icon></a></template>
            <template slot="lead">Analysis of sequencing data to discover new genetic risk factors for epilepsy.</template>
        </b-jumbotron>
        <b-jumbotron bg-variant="light" header-tag="h3" header-level="" class="text-left">
            <template slot="header">Variant Annotation Database<a class="github-icon float-right" href="https://github.com/liameabbott/annotationdb" target="_blank"><font-awesome-icon :icon="githubIcon"></font-awesome-icon></a></template>
            <template slot="lead">Integration of publicly available variant annotation datasets into an open-source <a href="https://www.hail.is" target="_blank">Hail</a> resource.</template>
        </b-jumbotron>
        <b-jumbotron bg-variant="light" header-tag="h3" header-level="" class="text-left">
            <template slot="header">Cloudtools Python Package<a class="github-icon float-right" href="https://github.com/Nealelab/cloudtools" target="_blank"><font-awesome-icon :icon="githubIcon"></font-awesome-icon></a></template>
            <template slot="lead">A suite of tools to facilitate working with <a href="https://www.hail.is" target="_blank">Hail</a> and <a href="https://spark.apache.org" target="_blank">Apache Spark</a> on Google Cloud Platform, including using <a href="http://jupyter.org" target="_blank">Jupyter</a> notebooks on Google Dataproc computing clusters.</template>
        </b-jumbotron>
    </b-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
export default {
    name: 'Projects',
    computed: {
        githubIcon () {
          return faGithub
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style>
.jumbotron>h3 {
    font-weight: 700;
}
.github-icon {
    color: rgba(0,0,0,.5);
}
.github-icon:hover {
    color: rgba(0,0,0,0.7);
}
</style>
