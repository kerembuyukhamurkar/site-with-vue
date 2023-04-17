<template>
    <nav class="flex  justify-between px-9 py-5 bg-stone-300">

    <h1 class="text-2xl font-bold">BrandName</h1>
    <div class="flex gap-6">
    <RouterLink to="/" class="">Home</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
    </div>

</nav>
   <router-view></router-view>
</template>
