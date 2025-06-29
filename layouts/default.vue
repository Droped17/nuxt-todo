<template>
    <div>
        <nav>
            <ul>
                <li><NuxtLink to="/">Todo list</NuxtLink></li>
            </ul>
        </nav>
        <main>
            <div>
                <slot />
            </div>
        </main>
    </div>
</template>