"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
test('Plugin should be correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('@bluebase/plugin-apollo')).toBeTruthy();
});
describe('Apollo Plugin test', () => {
    it('Test with Apollo Config', async () => {
        const Config = {
            httpLinkOptions: { uri: 'http://graphql', fetch: fetch },
            clientOptions: { reconnect: true }
        };
        const BB = new core_1.BlueBase();
        await BB.Plugins.register(index_1.default);
        // ApolloPlugin.getClient();
        // const Plugins = await BB.Plugins.has(Plugin);
        const Plugins = await BB.Configs.setValue('plugins.apollo', Config);
        console.log('Plugins', Plugins);
        expect(Plugins).toBeTruthy();
        BB.boot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL21rZGlyIGFwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBMEM7QUFDMUMsNkRBQThCO0FBRTlCLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDbkMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hDLE1BQU0sTUFBTSxHQUFHO1lBQ2QsZUFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDeEQsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtTQUNsQyxDQUFDO1FBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQ2xDLDRCQUE0QjtRQUM1QixnREFBZ0Q7UUFDaEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVgsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvbWtkaXIgYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG5cbnRlc3QoJ1BsdWdpbiBzaG91bGQgYmUgY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblxuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ0BibHVlYmFzZS9wbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcblx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IENvbmZpZyA9IHtcblx0XHRcdGh0dHBMaW5rT3B0aW9uczogeyB1cmk6ICdodHRwOi8vZ3JhcGhxbCcsIGZldGNoOiBmZXRjaCB9LFxuXHRcdFx0Y2xpZW50T3B0aW9uczogeyByZWNvbm5lY3Q6IHRydWUgfVxuXHRcdH07XG5cdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFx0Ly8gQXBvbGxvUGx1Z2luLmdldENsaWVudCgpO1xuXHRcdC8vIGNvbnN0IFBsdWdpbnMgPSBhd2FpdCBCQi5QbHVnaW5zLmhhcyhQbHVnaW4pO1xuXHRcdGNvbnN0IFBsdWdpbnMgPSBhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsbycsIENvbmZpZyk7XG5cdFx0Y29uc29sZS5sb2coJ1BsdWdpbnMnLCBQbHVnaW5zKTtcblx0XHRleHBlY3QoUGx1Z2lucykudG9CZVRydXRoeSgpO1xuXHRcdEJCLmJvb3QoKTtcblx0XHRcblx0fSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==