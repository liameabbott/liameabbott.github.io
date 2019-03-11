<template>
    <b-container>
        <b-row class="mt-4">
            <b-col sm="3"><img src="static/me.png"></b-col>
            <b-col sm="9" class="text-left">
                <p>I'm a data professional broadly interested in harnessing data to answer interesting questions through the development of efficient data pipelines, explanatory and predictive models, and intuitive visualizations.</p>
                <p>I'm currently a staff scientist in the <a href="https://www.nealelab.is" target="_blank">Neale</a> lab, located at the <a href="http://www.atgu.mgh.harvard.edu" target="_blank">Analytical and Translational Genetics Unit</a> (ATGU) at Massachusetts General Hospital and the <a href="https://www.broadinstitute.org/stanley" target="_blank">Stanley Center for Psychiatric Research</a> at the Broad Institute of MIT and Harvard.</p>
                <p>In the Neale lab, my work has focused on using statistical methods and computational techniques to elucidate the genetics underlying human traits and diseases.</p>
                <p>Prior to joining the Neale lab, I was a Data Scientist in the <a href="https://www2.deloitte.com/us/en/pages/deloitte-analytics/solutions/deloitte-insightstudio.html" target="_blank">InsightStudio</a> at Deloitte Consulting, where I developed dashboard visualizations for clients, designed database queries to feed those dashboards. In one project, I also demonstrated the use of sentiment analysis on social media data using NLP techniques to a federal government agency.</p>
                <p>During a summer internship with the Data Science and Analytics team at <a href="https://www.tripadvisor.com" target="_blank">TripAdvisor</a>, I worked on developing a new table in the group's data warehouse and creating a dashboard to visualize its content.</p>
                <p>I've also worked as a Research Associate at <a href="https://www.eatonvance.com" target="_blank">Eaton Vance Management</a>, where I conducted fundamental research on issuing companies in the leveraged loan market.</p>
                <p>I received a Master of Science in Applied Statistics from the University of Michigan and a Bachelor of Arts in Mathematics from Williams College.</p>
                <p>You can contact me at <a id="myemail" href="">liam.e.abbott@<span id="hide_email">blankspace</span>gmail.com</a>.</p>
            </b-col>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
#hide_email {
    display: none;
}
</style>
