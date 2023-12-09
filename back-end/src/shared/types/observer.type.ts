import { TicTacToeClientSocketEvents } from "@modules/web-socket/enums/tic-tac-toe-client-socket-events.enum";

export type Observer = (event: TicTacToeClientSocketEvents) => void;
