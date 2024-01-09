<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";

  let greeting = "";
  
  async function greet(name: string) {
    greeting = await invoke("greet", { name: name });
  }

  greet("Nobody");
</script>

<div class="flex items-center justify-center h-screen">
  <div class="space-y-4">
    <h1 class="text-4xl font-semibold">{greeting}</h1>
    <button class="p-4 bg-black bg-opacity-50 rounded-md" on:click={() => greet("Rony")}>Rony</button>
  </div>
</div>