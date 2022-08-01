<template>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <!-- <slot name="default"></slot> -->
        <slot></slot>
    </main>
    <aside>
        <slot name="sidebar"></slot>
    </aside>
</template>