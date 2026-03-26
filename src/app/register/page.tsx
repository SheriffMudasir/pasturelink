import { signup } from '../login/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default async function RegisterPage(props: { searchParams: Promise<{ error?: string }> }) {
  const searchParams = await props.searchParams;
  const error = searchParams?.error;

  return (
    <main className="min-h-screen bg-[#E8F5E9] flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-[#004D40]">Create Account</h1>
            <p className="text-gray-500 mt-2">Join Kwara NG to buy and invest</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-6 font-medium text-center border border-red-200">
              {error}
            </div>
          )}

          <form action={signup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required minLength={6} />
            </div>

            <Button type="submit" className="w-full bg-[#76FF03] hover:bg-[#64D800] text-[#004D40] font-bold">
              Register
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-[#004D40] font-bold hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
