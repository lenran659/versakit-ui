<script setup lang="ts">
import { VerDivider } from '@/index.ts'
</script>

<template>
  <div>
    <div>
      <p>
        There little thoughts are the rustle of leaves; they have their whisper
        of joy in my mind.
      </p>
      <ver-divider />
      <p>
        There little thoughts are the rustle of leaves; they have their whisper
        of joy in my mind.
      </p>
    </div>

    <div>
      <p>
        There little thoughts are the rustle of leaves; they have their whisper
        of joy in my mind.
      </p>
      <ver-divider line="dashed" />
      <p>
        There little thoughts are the rustle of leaves; they have their whisper
        of joy in my mind.
      </p>
    </div>

    <div>
      <ver-divider>🎇</ver-divider>
      <ver-divider position="center">🎇</ver-divider>
      <ver-divider position="right">🎇</ver-divider>
    </div>

    <div>
      <span>Rain</span>
      <ver-divider direction="vertical" />
      <span>Home</span>
      <ver-divider direction="vertical" border-style="dashed" />
      <span>Grass</span>
    </div>
  </div>
</template>
