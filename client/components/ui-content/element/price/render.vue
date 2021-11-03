<template>
    <div>
        <div v-if="prices.length==0">
            No prices
        </div>

        <div class="row">
            <div class="col" v-for="p in prices">
                <div class="card text-center" style="height:100%;">
                    <p class="ribbon ribbon-top-right" v-if="p.ribbon"><span>{{ p.ribbon }}</span></p>
                    <p class="py-4 fw-bold">{{ p.title }}</p>
                    <p class="d-flex justify-content-center align-text-top p-blue ">
                        <span class=" fas fa-dollar-sign textmuted pe-1 h6 mt-2 m-0"></span>
                        <span class="h1 m-0">{{ p.price }}</span>
                    </p>
                    <p class="text-muted">{{ p.subtitle }}</p>
                    <P class="fs-10 mb-1"><span class="fw-bold">Unlimited</span><span> Storage</span></P>
                    <P class="fs-10 mb-1"><span class="fw-bold">Unlimited</span><span> List,Board and calender views</span> </P>
                    <P class="fs-10 mb-1"><span class="fw-bold">Unlimited </span><span> Integrations</span></P>
                    <P class="fs-10 mb-1"><span class="fw-bold">Unlimited </span><span> Dashboards</span></P>
                    <p class="fs-10 mb-1"><span class="fw-bold">Guests </span>and<span class="fw-bold"> Permissions</span> </p>
                    <p class="fs-10 mb-1 mb-2 "> <span class="fw-bold">Goals,portfolios </span>and <span class="fw-bold">Custom Fields</span> </p>
                    <div class="btn btn-primary my-2">Start Trial</div> <a href="" class="fs-10"><span class="fas fa-percentage"></span><span class="bottom">Or let's make a deal</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prices: Array,
    },
}
</script>

<style>

.ribon {
    width: 30px;
    transform: rotate(90deg);
    transform-origin: 100% 0%
}

.card {
    position: relative;
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    overflow: hidden;
    padding: 20px;
    border: none
}

.vertical-align {
    vertical-align: text-top
}

.p-blue {
    color: #4f84f5
}

.ribbon {
    width: 150px;
    height: 150px;
    position: absolute
}

.ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    height: 30px;
    padding: 6px 0;
    background-color: #812eca;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    color: #fff;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center
}

.ribbon-top-right {
    top: -8px;
    right: -35px
}

.ribbon-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg)
}

.text-muted {
    font-size: 12px
}

.fs-10 {
    font-size: 12px
}

a {
    text-decoration: none;
    color: #812eca
}

a:hover {
    color: #9842e4
}

.bottom {
    margin: 0%;
    border-bottom: 1px dashed #812eca
}

.card .btn.btn-primary {
    background-color: #812eca;
    height: 40px;
    padding: 10px 0;
    outline: none;
    box-shadow: none;
    border: none;
    font-size: 12px;
    font-weight: bold
}

.ribon .btn.btn-primary {
    background-color: #812eca;
    height: 30px;
    width: 100px;
    outline: none;
    box-shadow: none;
    border: none;
    font-size: 12px;
    font-weight: bold
}

.btn.btn-primary:hover {
    background-color: #9842e4
}

.fas.fa-percentage {
    background-color: #812eca;
    color: white;
    font-size: 10px;
    padding: 4px;
    margin: 0 4px
}

@media (max-width:400px) {
    .ribon {
        width: 95px;
        transform: rotate(0);
        transform-origin: -100% 0
    }

    .ribon .btn.btn-primary {
        background-color: #812eca;
        height: 30px;
        text-align: center;
        outline: none;
        box-shadow: none;
        border: none;
        font-size: 12px;
        font-weight: bold
    }
}
</style>