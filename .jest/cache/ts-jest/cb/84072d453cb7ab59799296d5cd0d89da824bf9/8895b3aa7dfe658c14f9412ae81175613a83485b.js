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
            httpLinkOptions: { uri: 'http://graphql' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL21rZGlyIGFwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBMEM7QUFDMUMsNkRBQThCO0FBRTlCLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDbkMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hDLE1BQU0sTUFBTSxHQUFHO1lBQ2QsZUFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFO1lBQzFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7U0FDbEMsQ0FBQztRQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUNsQyw0QkFBNEI7UUFDNUIsZ0RBQWdEO1FBQ2hELE1BQU0sT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVYLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL21rZGlyIGFwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuXG50ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdAYmx1ZWJhc2UvcGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcbmRlc2NyaWJlKCdBcG9sbG8gUGx1Z2luIHRlc3QnLCAoKSA9PiB7XG5cdGl0KCdUZXN0IHdpdGggQXBvbGxvIENvbmZpZycsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBDb25maWcgPSB7XG5cdFx0XHRodHRwTGlua09wdGlvbnM6IHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0sXG5cdFx0XHRjbGllbnRPcHRpb25zOiB7IHJlY29ubmVjdDogdHJ1ZSB9XG5cdFx0fTtcblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHQvLyBBcG9sbG9QbHVnaW4uZ2V0Q2xpZW50KCk7XG5cdFx0Ly8gY29uc3QgUGx1Z2lucyA9IGF3YWl0IEJCLlBsdWdpbnMuaGFzKFBsdWdpbik7XG5cdFx0Y29uc3QgUGx1Z2lucyA9IGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvJywgQ29uZmlnKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucycsIFBsdWdpbnMpO1xuXHRcdGV4cGVjdChQbHVnaW5zKS50b0JlVHJ1dGh5KCk7XG5cdFx0QkIuYm9vdCgpO1xuXHRcdFxuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9